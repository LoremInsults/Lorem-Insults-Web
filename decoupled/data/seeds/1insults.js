
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('insults').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('insults').insert({insult: 'pollywodger'}),
        knex('insults').insert({insult: 'dumpsterface'}),
        knex('insults').insert({insult: 'assburglar'})
        knex('insults').insert({insult: 'terror turd'})
        knex('insults').insert({insult: 'butthole surfer'})
        knex('insults').insert({insult: 'numpty'})
        knex('insults').insert({insult: 'bampot'})
        knex('insults').insert({insult: 'weapons-grade idiot'})
        knex('insults').insert({insult: 'weaselheaded nincompoop'})
        knex('insults').insert({insult: 'bloviating flesh bag'})
        knex('insults').insert({insult: 'warthog-faced buffoon'})
        knex('insults').insert({insult: 'clinking, clanking, clattering collection of caliginous junk'})
        knex('insults').insert({insult: 'stuck up, half-witted, scruffy-looking Nerf herder'})
        knex('insults').insert({insult: 'son of a motherless goat'})
        knex('insults').insert({insult: 'smelly pirate hooker'})
        knex('insults').insert({insult: 'scum-sucking pig'})
        knex('insults').insert({insult: 'ignorant swine'})
        knex('insults').insert({insult: 'dirt-eating piece of slime'})
        knex('insults').insert({insult: 'painfully mediocre waste of space'})
        knex('insults').insert({insult: 'Nosferatu doppelganger'})
        knex('insults').insert({insult: 'contagiously stupid'})
      ]);
    });
};

// Contagiously stupid
