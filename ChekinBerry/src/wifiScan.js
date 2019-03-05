var nmap = require('node-nmap');

nmap.nmapLocation = "nmap"; //default
//    Accepts array or comma separated string for custom nmap commands in the second argument.
var nmapscan = new nmap.NmapScan('192.168.1.1-254', '-sP');

nmapscan.on('complete',function(data){


    var elements = Object.keys(data).length - 1;
    for (var i = 0; i < elements; i++) {
        console.log(data[i].mac);
    }

    // checkinberry.com/api/macs
});
nmapscan.on('error', function(error){
    console.log(error);
});



nmapscan.startScan();

// returns
// [
//    {
//       "hostname":"localhost",
//       "ip":"127.0.0.1",
//       "mac":null,
//       "openPorts":[

//       ],
//       "osNmap":null
//    },
//    {
//       "hostname":"google.com",
//       "ip":"74.125.21.113",
//       "mac":null,
//       "openPorts":[

//       ],
//       "osNmap":null
//    }
// ]

