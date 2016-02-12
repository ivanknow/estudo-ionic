(function() {
	'use strict';
	angular.module("eliteApp").factory('eliteApi', [ eliteApi ]);

	function eliteApi() {
		var leagues = [
				{
					"id" : 2029,
					"name" : "6th Grade Saturday 2014-15 League",
					"isDirty" : false,
					"homeScreen" : "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\n*\tThis League is designed for 6th Grade “B” Travel teams, and higher-level 5th Grade AAU caliber teams.\n*\t8 game minimum (will try to get 9 games scheduled if possible) plus/season ending tournament.  Plan is to end on February 28th.\n*\tSeason to start December 13th.\n*\tGames to be played at Centennial High School.\n*\tGame times 2pm and later.\n*\tMinimum 6 teams required.\n*\t$635 per team registration fee (includes referees fees).\n*\tAwards for 1st & 2nd Place in season ending tournament.\n*\t**All teams will be required to submit team rosters prior to the first game of the season.  Players must be in 5th/6th Grade and/or born after August 31, 2002.**\n\nHave a great season!\n\n**Inclement weather**: Inclement weather procedure depends on your location. Based on your game location, call:\n\n* Inclement Weather Hotline for Howard County Schools: 410-313-6827",
					"rulesScreen" : "### HS Federation rules will be used except where noted: ###\n\n\n*\tThe first team listed (under V) on the schedule is considered VISITORS and should wear Dark Jerseys. Second team listed (under H) is HOME and wears White (light) jerseys.\n*\tHome Team Provides game Ball – It should be a NFHS approved 28.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n*\tEach team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.\n*\t20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n*\tTwo 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n*\t**Free Throw Bonus**: We’re trying to minimize wasting playing time shooting fouls shots while the clock runs. \n*\t**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul. \n*\t**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls. So if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n*\tNo pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n*\t2 behavior related technical fouls result in removal from current and next game.\n*\tNo technical fouls for book errors. Just correct the mistake and move on.\n*\tTeams can start game with 4 players. If you have 4 players available at game time, the game must start.\n*\tOvertime - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul shot, one player at a time. All ten players shoot. If one team has made more shots than the other team after 10 shots, that team wins. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n*\tThe League Commissioner, Chris Steinbach (410-924-4324) will settle all disputes and rule interpretations. If Chris can’t be reached, the lead official will settle disputes or rules interpretations.",
					"isArchived" : false,
					"isActive" : true
				},
				{
					"id" : 2024,
					"name" : "7th Grade MS JV Friday 2014-15 League",
					"isDirty" : false,
					"homeScreen" : "###Games that were cancelled from Friday 3/6 at Dunloggin and Mayfield Woods are now Monday, 3/9 at Veterans ES and Ellicott Mills MS.  See detailed schedule below. \n### \n\n# Playoff Brackets\n\n## Division 1 Bracket\n![Division 1 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d1.png)\n\n## Division 2 Bracket\n![Division 2 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d2.png)\n\n## Division 3 Bracket\n![Division 3 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d3.png)\n",
					"rulesScreen" : "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules.",
					"isArchived" : false,
					"isActive" : true
				} ];
		var leagueData = {
			"league" : {
				"name" : "Spring Fling Tournament 2014",
				"id" : 2009,
				"homeScreen" : "* 5th Grade Championship - 7:30m MAC 3\n* 6th Grade Championship - 6:30pm MAC 4\n* 7th Grade White Championship - 7:30pm MAC 4\n* 7th Grade Green Championship - 7:30pm MAC 2\n* 8th Grade Championship - 7:30pm MAC 1\n* 9th Grade Championship - 8:30pm MAC 4\n* 10th Grade Championship - 8:30pm MAC 1\n* 11th Grade Championship - 8:30pm MAC 3",
				"rulesScreen" : null
			}

			,
			"teams" : [ {
				"divisionName" : "5th Grade - Green",
				"divisionTeams" : [ {
					"id" : 3222,
					"name" : "Columbia Ravens 5th",
					"coach" : "John Miller"
				}, {
					"id" : 4299,
					"name" : "D1 Spartans",
					"coach" : "Jacob Silverman"
				}, {
					"id" : 3220,
					"name" : "HC Elite OMalley 5th",
					"coach" : "Eddie OMalley"
				}, {
					"id" : 3277,
					"name" : "MD 3D 5th",
					"coach" : "Marty Libinski"
				}, {
					"id" : 3275,
					"name" : "Severn Elite Gold",
					"coach" : "Darryl Adams"
				}, {
					"id" : 3224,
					"name" : "Team Dedication 5th",
					"coach" : "Don Carpenter"
				} ]

			},
			{
				"divisionName": "5th Grade - White",
				"divisionTeams": [{
					"id": 3225,
					"name": "CBSA Hoyas 5th Grade",
					"coach": "Terrance Taylor"
				}, {
					"id": 3276,
					"name": "HC Elite 4th Tookes",
					"coach": "Anthony Tookes"
				}, {
					"id": 3221,
					"name": "HC Elite Knisley 5th",
					"coach": "Jordan Knisley"
				}, {
					"id": 3226,
					"name": "Randelstown Runnin Rebels 5th",
					"coach": "Eric Levi"
				}, {
					"id": 3223,
					"name": "Up n Coming Clippers 5th",
					"coach": "Brian Jackson"
				}]
			}],
			"locations": [{
				"id": 1015,
				"name": "Gary Arthur Community Center ct 7",
				"locationUrl": "http://goo.gl/maps/E0Mhb",
				"address": "2400 Rt 97, Cookesville, MD 21723",
				"latitude": 39.300000,
				"longitude": -77.020000
			}, {
				"id": 1016,
				"name": "Gary Arthur Community Center ct 8",
				"locationUrl": "http://goo.gl/maps/E0Mhb",
				"address": "2400 Rt 97, Cookesville, MD 21723",
				"latitude": 39.300000,
				"longitude": -77.020000
			}]
		};

		function getLeagues() {
			return leagues;
		}

		function getLeagueData() {
			return leagueData;
		}

		return {
			getLeagues : getLeagues,
			getLeagueData : getLeagueData
		};
	}

})();