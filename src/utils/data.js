import _ from 'lodash';
import faker from 'faker';
const surferIpsum = `Good speed hack fun board pose on the nose too deep shorebreak hallow double overhead kook late drop. Tide switch pumping grom doggy door tossin' pizzas lefts full mad air reverse poked the nose. Combination good-epic foam climb lip water. Casual muscle full wrap double overhead jet ski bottomed out sets out the back. Jeffreys Bay smash Jamie O'Brien socked in air section short period solid hit rights hallow. Shinner knee high dawn patrol slabbing loose, keyhole shutting down big windup. Pig dog slab ripable frontside open face frothing speed hack lip line. Pumping swell nuggets of heaven mind surfing Mick Fanning water kelp, air game section feathered lip firing. Freshie knee high Fanning, psych lined up wax the stick ride spit. Clean shinner full mad air reverse booties best section late big finner glass. Fan a spray cutties turds in the lineup rights tube zone bro wave frontside glassy. Buy my poster paddle battle tagging Nat Young rythm psyching vertical so pitted 3rd reef burner. Thruster snake sick crusty sand bottom pose on the nose left critical. Freshie foam ball forehand hook shampoo longboard, Nat Young kelp rad off the bottom. Rinsed heavy section kick out stall indy split the peak good. Precise, pose on the nose nosepick reverse barreling dredging success point break tight section. Wind swell fish backside attack barnacle DOH line-up Eddie would go blonde rigs glazz pit. Legend nose wave of the winter paddle claim brah catching some shade Owen Wright long period Craig Anderson. Reef break rail grab big fish rank psyched finner rail. Rocker late surf bottomed out transition snap radical aerial lines Parko barnacle. Matty Wilko pearl chunky shampoo backhand attack rights air drop indy fresh stick. Full rotation whitewash sand bar shampoo bottomed out keyhole pounding. Wobbly swamped, sand bar making it rain thruster Teahupoo. Puff, bottom turn lined up pigdog DOH radical reef rash railwork offshore. Healthy float sets amped beat it kook gnarley. Tight section beat it kook shampoo wonky spray wax transition over head. Coffee marine layer clipped digs rail wetsuit tan he's a legend floater double-up, deep. Blowing up backhand attack sets full rote loc blowing up technique fin. Kook, Mick Fanning pumping swell full rotation legend lay day. Kerrzy in the bricks smash grommet muscle, long period Owen Wright smooth Freddy P.. Rocker outer bar wave of the winter fish bunny chow wall epic tuck best section pumping swell. Best section ice cream headaches sets 360 leg rope outer bar? Big finner tuck, technique rail dig turning on psyching. Grommet outer bar big fish wave of my life leash. Bro heavy section muscle wind conditions stomp, bottomed out section high on the face bottomed out squirt? Ripping the pit send it open face poor-fair radical.`;

const takeSentence = () => _.sample(surferIpsum.split('.'));
const createList = (num, creator) => Array.from(new Array(num)).map(creator);

export const createPostBody = (sentences) => createList(sentences, takeSentence).join(' ');

export const createPosts = (i) =>
  createList(i, (_i, id) => ({
    id,
    user: { name: faker.name.firstName() },
    body: createPostBody(_.random(1, 3)),
    comments: createList(_.random(1, 3), (_i, id) => ({
      id,
      user: { name: faker.name.firstName() },
      body: faker.lorem.sentences(_.random(1, 3)),
    })),
  }));
