/**
 *  difficulty for mining
 * use for test & app itself
 * it uses dynamic mining difficulty that change on certain time */

const DIFFICULTY = 2

const MINE_RATE  = 3000  // dynamic difficulty in milisecond
const INITIAL_BALANCE = 500
const MINING_REWARD = 50

module.exports = { DIFFICULTY, MINE_RATE, INITIAL_BALANCE, MINING_REWARD }