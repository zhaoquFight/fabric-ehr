'use strict';
const Ehr = require('../../../chaincode/ehr/lib/ehr.js');
var OPT = require('../interface/opt.js');
var opt = new OPT();

async function main() {

    console.log("删除: 'test1', '1'");
    var ret1 = await opt.delete("test1", "1")
    if (!ret1 || ret1.length == 0) {
        console.log("删除失败");
    } else {
        console.log("修改成功");
    }

    console.log("删除 'test1', '2'");
    var ret2 = await opt.delete("test1", "2")
    if (!ret2 || ret2.length == 0) {
        console.log("删除失败");
    } else {
        console.log("修改成功");
    }
}

main();


















