module.exports = (client) => {
    client.variables(
      {
      prefix:".",
      welcome: false,
      welcometype: "text",
      welcomechannel: "0",
      welcomemsg: "Welcome To {guild.name}, **{user.name}**",
      welcomemsgembeds: {"title": "Welcome To {guild.name}","description": "Hello {user.name} please enjoy your stay!"},
     
      },
      "main",
    );
  };