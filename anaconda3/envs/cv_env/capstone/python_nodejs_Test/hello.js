const { spawn } = require('child_process');



// 여러 개의 값들을 묶어서(=리스트?) 보낼 수도 있음
// const childPython = spawn('python', ['--version']);
const childPython = spawn('python', ['codespace.py']);
// const childPython = spawn('python', ['codespace.py', 'OyeKool']);

// 리스트(?) 안에 리스트(?) 를 넣을 수도 있음
obj = { Channel : 'Oyekool'}
// const childPython = spawn('python', ['codespace.py', JSON.stringify(obj)]);

childPython.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

childPython.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

childPython.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});