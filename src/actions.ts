import type { ModuleInstance } from './main.js'
import { InstanceStatus } from '@companion-module/base'
// const constants = require('./constants')
import { CONFCAPCOMMANDS, LANGUAGES } from './constants.js'

export function UpdateActions(self: ModuleInstance): void {
	self.setActionDefinitions({
		get_caption: {
			name: 'Test Connection',
			options: [
				{
					id: 'startTranscribing',
					type: 'dropdown',
					label: 'Action type',
					choices: CONFCAPCOMMANDS,
					default: 'startTranscribing',
				},
			],
			callback: async (event) => {
				const response = await fetch(`https://api.deafassistant.com/stream/LiteGetStream?streamName=${self.config.streamName}`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
				})
				if (response.status == 200) {
					self.updateStatus(InstanceStatus.Ok)
				} else {
					self.updateStatus(InstanceStatus.ConnectionFailure)
				}
			},
		},
		name: 'Test Localhost Url',
		options: [
			{
				id: 'startTranscribing',
				type: 'dropdown',
				label: 'Action type',
				choices: CONFCAPCOMMANDS,
				default: 'startTranscribing',
			},
		],
		callback: async (event) => {
			var apiUrl = self.config.localhostUrl.replace("index.html", "stream/LiteGetStream"); //http://10.0.0.199:8080/index.html

			const response = await fetch(apiUrl, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (response.status == 200) {
				self.updateStatus(InstanceStatus.Ok)
			} else {
				self.updateStatus(InstanceStatus.ConnectionFailure)
			}
		},
	}
	})
}
