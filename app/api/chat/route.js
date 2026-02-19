import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message, provider, history } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (provider === 'ollama') {
      return await handleOllamaRequest(message, history);
    } else if (provider === 'huggingface') {
      return await handleHuggingFaceRequest(message, history);
    } else {
      return NextResponse.json(
        { error: 'Invalid provider. Use "ollama" or "huggingface"' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

async function handleOllamaRequest(message, history) {
  const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';
  const MODEL = process.env.OLLAMA_MODEL || 'llama2'; // Options: llama2, mistral, llama3, etc.

  try {
    // Build context from history
    const context = history
      ? history.map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`).join('\n')
      : '';

    const prompt = context
      ? `${context}\nUser: ${message}\nAssistant:`
      : `User: ${message}\nAssistant:`;

    const response = await fetch(`${OLLAMA_URL}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        prompt: prompt,
        stream: false,
        options: {
          temperature: 0.7,
          top_p: 0.9,
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ollama API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return NextResponse.json({ response: data.response || data.text || 'No response generated' });
  } catch (error) {
    console.error('Ollama request error:', error);
    
    // Provide helpful error messages
    if (error.message.includes('ECONNREFUSED') || error.message.includes('fetch failed')) {
      return NextResponse.json(
        { 
          error: 'Cannot connect to Ollama. Please make sure Ollama is running on your machine. Install it from https://ollama.ai and run: ollama pull llama2',
          response: null
        },
        { status: 503 }
      );
    }
    
    throw error;
  }
}

async function handleHuggingFaceRequest(message, history) {
  const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
  const HF_MODEL = process.env.HUGGINGFACE_MODEL || 'mistralai/Mistral-7B-Instruct-v0.1';

  if (!HF_API_KEY) {
    return NextResponse.json(
      { 
        error: 'Hugging Face API key not configured. Set HUGGINGFACE_API_KEY in your .env file.',
        response: null
      },
      { status: 500 }
    );
  }

  try {
    // Build messages array for chat format
    const messages = history
      ? [...history.map(msg => ({ role: msg.role, content: msg.content })), { role: 'user', content: message }]
      : [{ role: 'user', content: message }];

    const response = await fetch(
      `https://api-inference.huggingface.co/models/${HF_MODEL}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HF_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: messages.length > 1 
            ? messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n') + '\nAssistant:'
            : `User: ${message}\nAssistant:`,
          parameters: {
            return_full_text: false,
            max_new_tokens: 512,
            temperature: 0.7,
          }
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Hugging Face API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    
    // Handle different response formats from Hugging Face
    let responseText = '';
    if (Array.isArray(data) && data[0]?.generated_text) {
      responseText = data[0].generated_text;
    } else if (data.generated_text) {
      responseText = data.generated_text;
    } else if (data[0]?.summary_text) {
      responseText = data[0].summary_text;
    } else {
      responseText = JSON.stringify(data);
    }

    return NextResponse.json({ response: responseText.trim() });
  } catch (error) {
    console.error('Hugging Face request error:', error);
    throw error;
  }
}
