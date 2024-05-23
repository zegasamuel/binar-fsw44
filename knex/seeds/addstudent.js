/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').insert([
        {
            id: 1,
            first_name: 'sam',
            last_name: 'sam',
            age: 21,
        },
        {
            id: 2,
            first_name: 'b',
            last_name: 'c',
            age: 21,
        },
        {
            id: 3,
            first_name: 'd',
            last_name: 'e',
            age: 21,
        },
        {
            id: 4,
            first_name: 'f',
            last_name: 'g',
            age: 21,
        },
        {
            id: 5,
            first_name: 'h',
            last_name: 'i',
            age: 21,
        },
        {
            id: 6,
            first_name: 'j',
            last_name: 'k',
            age: 21,
        },
    ])
}
