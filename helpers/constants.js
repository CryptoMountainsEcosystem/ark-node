'use strict';

module.exports = {
	activeDelegates: 51,
	maximumVotes: 1,
	addressLength: 208,
	blockHeaderLength: 248,
	confirmationLength: 77,
	epochTime: new Date(Date.UTC(2017, 2, 21, 13, 0, 0, 0)),
	fees:{
		send: 1,
		vote: 100000000,
		secondsignature: 500,
		delegate: 100000000,
		multisignature: 500
	},
	feeStart: 1,
	feeStartVolume: 10000 * 100,
	fixedPoint : Math.pow(10, 2),
	forgingTimeOut: 3060, // 102 blocks / 2 rounds
	maxAddressesLength: 208 * 128,
	maxAmount: 100000000,
	maxClientConnections: 100,
	maxConfirmations : 77 * 100,
	maxPayloadLength: 2 * 1024 * 1024,
	maxRequests: 10000 * 12,
	maxSignaturesLength: 196 * 256,
	maxTxsPerBlock: 50,
	blocktime: 8,
	numberLength: 100000000,
	requestLength: 104,
	rewards: {
		milestones: [
			5, // Initial Reward
			5, // Milestone 1
			5, // Milestone 2
			5, // Milestone 3
			5  // Milestone 4
		],
		offset: 1,   // Start rewards at block, ie 7 days after net start
		distance: 3000000, // Distance between each milestone
	},
	signatureLength: 196,
	totalAmount: 100000000000,
	unconfirmedTransactionTimeOut: 10800 // 1080 blocks
};
