









var str = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
var obj = JSON.parse(str);

console.log(obj);     // This prints out obj as  JS values

delete obj.foo;       // this deletes foo
JSON.stringify(obj);  // gives us back str string version