process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  let input = data.toString().trim();

  if (input === "pwd") {
    let cmd = process.cwd();
    process.stdout.write(cmd);
  } else {
    process.stdout.write("I only do pwd.");
  }

  process.stdout.write("\nprompt > ");
});
