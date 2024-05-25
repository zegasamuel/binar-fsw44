/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {name: 'John Doe', email: 'john.doe@example.com', date_of_birth: '2000-01-01'},
    {name: 'Jane Smith', email: 'jane.smith@example.com', date_of_birth: '2001-02-02'},
    {name: 'Alice Johnson', email: 'alice.johnson@example.com', date_of_birth: '2002-03-03'},
    {name: 'Bob Brown', email: 'bob.brown@example.com', date_of_birth: '2003-04-04'},
    {name: 'Charlie Davis', email: 'charlie.davis@example.com', date_of_birth: '2004-05-05'},
    {name: 'David Evans', email: 'david.evans@example.com', date_of_birth: '2005-06-06'},
    {name: 'Eva Green', email: 'eva.green@example.com', date_of_birth: '2006-07-07'},
    {name: 'Frank Harris', email: 'frank.harris@example.com', date_of_birth: '2007-08-08'},
    {name: 'Grace Kim', email: 'grace.kim@example.com', date_of_birth: '2008-09-09'},
    {name: 'Henry Lee', email: 'henry.lee@example.com', date_of_birth: '2009-10-10'},
    {name: 'Isla Martin', email: 'isla.martin@example.com', date_of_birth: '2010-11-11'},
    {name: 'Jack Nelson', email: 'jack.nelson@example.com', date_of_birth: '2011-12-12'},
    {name: 'Karen Olson', email: 'karen.olson@example.com', date_of_birth: '2012-01-13'},
    {name: 'Liam Parker', email: 'liam.parker@example.com', date_of_birth: '2013-02-14'},
    {name: 'Mia Quinn', email: 'mia.quinn@example.com', date_of_birth: '2014-03-15'},
    {name: 'Noah Roberts', email: 'noah.roberts@example.com', date_of_birth: '2015-04-16'},
    {name: 'Olivia Scott', email: 'olivia.scott@example.com', date_of_birth: '2016-05-17'},
    {name: 'Paul Turner', email: 'paul.turner@example.com', date_of_birth: '2017-06-18'},
    {name: 'Quinn Walker', email: 'quinn.walker@example.com', date_of_birth: '2018-07-19'},
    {name: 'Ruby Young', email: 'ruby.young@example.com', date_of_birth: '2019-08-20'}
  ]);
};
