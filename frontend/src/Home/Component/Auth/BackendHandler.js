
function SigninHandler() {

}

function LoginHandler(ws,values) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        const responsedata = { type: 'LOGIN', content: values };
        ws.send(JSON.stringify(responsedata));
      }
}