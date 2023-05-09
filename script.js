const exec = async (cmd) => {
    const process = await Deno.run({ cmd });
    await process.status();
  };
  
  const shutdown = async () => {
    await exec(["sudo", "shutdown", "-h", "now"]);
  };
  
  shutdown();