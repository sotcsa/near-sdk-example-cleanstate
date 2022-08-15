
npm run deploy
export $(cat contract/neardev/dev-account.env)


near call $CONTRACT_NAME set '{"key": "username", "value": "sotcsa"}' --accountId $CONTRACT_NAME
near view $CONTRACT_NAME get '{"key": "username"}'
near call $CONTRACT_NAME clear '{"keys": ["username"]}' --accountId $CONTRACT_NAME
near view $CONTRACT_NAME get '{"key": "username"}'
