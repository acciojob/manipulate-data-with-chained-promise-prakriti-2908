//your JS code here. If required.

let output = document.getElementById("output");

let arr = [1,2,3,4];
let a;
let p1 = new Promise((resolve)=>{
	setTimeout(()=>{
		a = arr.filter(v=>v%2==0);
		resolve(a);
	},1000);
});

p1.then((data)=>{
	output.innerHTML = data;
	return new Promise((resolve)=>{
	let b = a.map(v=>v*2); 
		setTimeout(()=>{
			resolve(b);
		},2000)
	})
}).then((data)=>{
	output.innerHTML = data;
})