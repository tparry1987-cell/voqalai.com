exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const response = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer key_fd1b9db729140269c9408a50d7ff',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ agent_id: 'agent_3a99861f97652e7650a3f3a1b4' })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://voqalai.com'
      },
      body: JSON.stringify({ access_token: data.access_token })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create call' })
    };
  }
};
