const projects = [
	{
		url: 'https://matchcity.dennissmuda.com/',
		headline: `Play <span class="emphasis">Match City</span> in your browser 🟥`,
		subline: `game written in typescript`,
		description: `casual 🚽 game to play in short bursts!
				try to beat my highscore (22000+) by <span class="emphasis">matching tiles</span>!`
	},
	{
		url: 'https://backytracky.com/',
		headline: `Practice music with <span class="emphasis">BackyTracky</span> 🎹`,
		subline: `remix-run fullstack react application`,
		description: `something to help you practice solos, scales and licks.
				create your own tracks, or jam to other peoples <span class="emphasis">backing tracks</span>!`
	},
	{
		url: 'https://dennissmuda.itch.io/generic-rogue-shooter',
		headline: `I put a <span class="emphasis">game</span> on itch 🎮`,
		subline: 'generic roguelike shooter to play in your browser',
		description:
			'see how many waves you can survive... check it out, and let me know how it went.'
	},
	{
		url: 'https://lukasgorgon.com/',
		headline: 'A website for a <span class="emphasis">drone pilot</span> 🚁',
		subline: 'static next.js + tailwind website',
		description: `Lukas is a buddy of mine and makes awesome drone videos! I
			built a small website that let's him showcase his work.`
	},
	{
		url: 'https://www.tri-deals.de/',
		headline: `(Tri)Deals for <span class="emphasis">triathletes</span> 💪`,
		subline: `vue.js frontend`,
		description: `a website that has handpicked deals for very sporty people`
	},
	{
		url: 'https://kontakthelfer.de/',
		headline: `We've built <span class="emphasis">KontaktHelfer</span> 📒`,
		subline: `vue.js, graphql and qr-codes`,
		description: `a platform to handle <span class="emphasis">contact-list</span> keeping via qr-codes.`
	}
]

const topProjects = projects.slice(0, 4)

export { projects, topProjects }
