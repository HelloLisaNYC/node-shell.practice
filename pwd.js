

module.exports = function (str) {
    // process.stdin.on("data", (data) => {
    let input = str.toString().trim();

    if (input === "pwd") {
        let cmd = process.cwd();
        process.stdout.write(cmd);
    } else {
        process.stdout.write("I only do pwd.");
    }
};
