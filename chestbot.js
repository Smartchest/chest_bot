const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '*'

client.on('ready', () => {
	console.log('봇 시작됨!');
	client.user.setActivity('*도움말 을 입력');
});

client.on('message', msg => {

	//스챗 유튜브 소개 embed
    const ytEmbed = new Discord.MessageEmbed()
	.setColor('#FF9E00')
	.setTitle('스챗 유튜브')
	.setURL(' https://m.youtube.com/channel/UC4QrbeGZ50gTj6iCvrZCnZA?view_as=subscriber')
	.setDescription('스챗의 가이드 유튜브입니다')
	.setThumbnail('https://i.imgur.com/LnbNh7V.png')
	.addFields(
		{ name: '채널 설명', value: 'Smart_chest입니다.\n이 채널은 마인크래프트 가이드 채널입니다.\n구독 좋아요 해주시면 감사하겠습니다^^' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '디스코드 초대 링크', value: 'https://discord.gg/zjzAPmy', inline: true },
	)
	.setTimestamp()
	.setFooter('[스챗]Smart_chest#5428', 'https://i.imgur.com/LnbNh7V.png');

	//도움말 embed
	const helpembed = new Discord.MessageEmbed()
	.setColor('#FFF203')
	.setTitle(':page_facing_up:도움말:page_facing_up:')
	.setDescription('chest_bot이 알아듣는 명령어를 알려드려요!')
	.setThumbnail('https://i.imgur.com/AcOWNvW.png')
	.addFields(
		{ name: '>>참고해주세요<<', value: `명령어 앞에 꼭 ${prefix} 를 붙여주세요.\n그렇지 않으면 봇이 명령을 알아듣지 못합니다.`},
		{ name: '\u200B', value: '\u200B' },
		{ name: '도움말 정보', value: '정보를 제공해주는 명령어들 입니다.', inline: true },
		{ name: '도움말 관리(미완)', value: '관리자들만 쓸 수 있는 명령어들 입니다.', inline: true },
	)
	.setTimestamp()
	.setFooter('[스챗]Smart_chest#5428', 'https://i.imgur.com/LnbNh7V.png');

	//정보 도움말 embed
	const helpinformation = new Discord.MessageEmbed()
	.setColor('#04ff0f')
	.setTitle(':ledger:정보 도움말:ledger:')
	.setDescription('정보를 제공해주는 명령어들 입니다.')
	.setThumbnail('https://i.imgur.com/etgnH0w.jpg')
	.addFields(
		{ name: '>>참고해주세요<<', value: `명령어 앞에 꼭 ${prefix} 를 붙여주세요.\n그렇지 않으면 봇이 명령을 알아듣지 못합니다.`},
		{ name: '\u200B', value: '\u200B' },
		{ name: '도움말', value: '도움말을 띄웁니다.', inline: true },
		{ name: '스챗 유튜브', value: '스챗 유튜브의 정보입니다.', inline: true },
		{ name: '디스코드 초대', value: '다른 사람을 이 디스코드에\n초대하고 싶을 때 읽어보세요.'}
	)
	.setTimestamp()
	.setFooter('[스챗]Smart_chest#5428', 'https://i.imgur.com/LnbNh7V.png');

	//디스코드 링크 embed
	const discordlink = new Discord.MessageEmbed()
	.setColor('#01B0FF')
	.setTitle('디스코드 초대 링크')
	.setDescription('이 디스코드 방에 초대할 수 있는 링크입니다.\n링크는 더 만들지 말아주시고\n아래 링크를 사용해주세요.')
	.addField('디스코드 초대링크', 'https://discord.gg/7rSA4nu (복붙해서 사용하세요)')

  //출력
  if (msg.content === `${prefix}스챗 유튜브`) {
     msg.channel.send(ytEmbed);
  }

  if (msg.content === `${prefix}도움말`) {
	 msg.channel.send(helpembed);
  }

  if (msg.content === `${prefix}도움말 정보`) {
	msg.channel.send(helpinformation);
 }

 if (msg.content === `${prefix}디스코드 초대`) {
	msg.channel.send(discordlink);
 }

  if (msg.content === `${prefix}안녕`){
	 msg.channel.send("안녕하세요!")
  }

  });

client.login('Njg1MTExMDQ5OTA4NzgxMTE2.XoXzFA.QZKZRFseoUFGy5EE3ksgPd_pNFk');