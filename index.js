//@ts-ignore
import child_process from 'child_process';
import { list } from './list.js';

const INSTANCES = 3;
const TOTAL = INSTANCES * list.length;
let launched = 0;

list.forEach((uri) => {
    for(let i = 0; i < INSTANCES; i++) {
        launched++;
        console.log(`launching ${launched}/${TOTAL}`);
        child_process.exec(
            `docker run -i --rm alpine/bombardier -c 10000 -d 5h -l ${uri}`,
            (err, stdout, stderr) => {
                if(err) {
                    console.log({ uri, err });
                }
        });
    }
})