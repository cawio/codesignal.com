function lrcToSubRip(lrcLyrics: string[], songLength: string): string[] {
    let subRipFromat: string[] = [];
    const arrow: string = '--> ';
    for (let i = 0; i < lrcLyrics.length; i++) {
        const el1: string = lrcLyrics[i];
        const el2: string = lrcLyrics[i + 1];
        const counter: string = `${i + 1}`;
        let startTime: string = '00:'.concat(el1.substring(1, 9).replace('.', ','), '0 ');
        let endTime: string;
        if (i === lrcLyrics.length - 1) {
            endTime = songLength.concat(',000');
        } else {
            endTime = '00:'.concat(el2.substring(1, 9).replace('.', ','), '0');
        }
        const lyrics: string = el1.substring(11);

        // change format from mm/ss to hh/mm/ss
        startTime = changeFormat(startTime);
        endTime = changeFormat(endTime);
        
        subRipFromat.push(
            counter, 
            startTime + arrow + endTime,
            lyrics
        );
        
        if (i < lrcLyrics.length - 1) {
            subRipFromat.push('');
        }
    }

    return subRipFromat;
}

function changeFormat(timeString: string): string {
    const seconds: string = timeString.substring(6);
    const minutes: string = String(Number(timeString.substring(3, 5)) % 60).padStart(2, '0');
    let hours: string     = timeString.substring(0, 2);  
    
    if (hours === '00') {
        hours = String(Math.floor(Number(timeString.substring(3, 5)) / 60)).padStart(2, '0');
    }

    timeString = hours.concat(':', minutes, ':', seconds);

    return timeString;
}

const task147_1: [string[], string] = [
    ["[00:12.00] Happy birthday dear coder,", 
     "[00:17.20] Happy birthday to you!"],
    "00:00:20"
];

console.log(lrcToSubRip(task147_1[0], task147_1[1]));

const task147_2: [string[], string] = [
    ["[95:19.55] i hear babies cryin,", 
     "[95:23.31] i watch them grow", 
     "[95:26.05] theyll learn much more", 
     "[95:29.18] than ill ever know", 
     "[95:33.10] and i think to myself,", 
     "[95:38.44] what a wonderful world"],
   "02:23:44"
];

console.log(lrcToSubRip(task147_2[0], task147_2[1]));