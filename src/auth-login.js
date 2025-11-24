// ECMAScript : Graal.js — Authentication Script
var ScriptVars = Java.type("org.zaproxy.zap.extension.script.ScriptVars");
var HttpRequestBody = Java.type("org.parosproxy.paros.network.HttpRequestBody");
var HttpHeader = Java.type("org.parosproxy.paros.network.HttpHeader");
var URI = Java.type("org.apache.commons.httpclient.URI");
var HttpRequestHeader = Java.type("org.parosproxy.paros.network.HttpRequestHeader");
var HttpMessage = Java.type("org.parosproxy.paros.network.HttpMessage");

function authenticate(helper, paramsValues, credentials) {
  var loginUrl = paramsValues.get("loginUrl");
  var username = credentials.getParam("user");
  var password = credentials.getParam("password");
  var bodyJson = JSON.stringify({ username: username, password: password });

  var reqHeaderStr = "POST " + loginUrl + " HTTP/1.1\r\n" +
    "Content-Type: application/json\r\n" +
    "Accept: application/json\r\n" +
    "Connection: close\r\n";
  var reqHeader = new HttpRequestHeader(reqHeaderStr);
  reqHeader.setHeader(HttpHeader.HOST, new URI(loginUrl, false).getHost());

  var msg = new HttpMessage(reqHeader, new HttpRequestBody(bodyJson));
  helper.getHttpSender().sendAndReceive(msg, true);

  var resp = msg.getResponseBody().toString();
  try {
    var obj = JSON.parse(resp);
    var token = obj.access_token || obj.token || obj.jwt || null;
    if (token) { ScriptVars.setGlobalVar("JWT", token); }
  } catch (e) { /* ignore */ }
  return msg;
}

function getRequiredParamsNames() { return ["loginUrl"]; }
function getOptionalParamsNames() { return []; }
function getCredentialsParamsNames() { return ["user","password"]; }
