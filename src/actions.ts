import type { ModuleInstance } from './main.js'
import { InstanceStatus } from '@companion-module/base'
// const constants = require('./constants')
import { CONFCAPCOMMANDS } from './constants.js'

export function UpdateActions(self: ModuleInstance): void {
	self.setActionDefinitions({
		get_caption: {
			name: 'Test Stream Connection',
			options: [
				{
					id: 'testRemoteConnection',
					type: 'dropdown',
					label: 'Action type',
					choices: CONFCAPCOMMANDS,
					default: 'testRemoteConnection',
				},
			],
			callback: async (event) => {
				console.log('get_caption action triggered', event)
				const response = await fetch(
					`https://api.deafassistant.com/stream/LiteGetStream?streamName=${self.config.streamName}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
					},
				)
				if (response.status == 200) {
					self.updateStatus(InstanceStatus.Ok)
				} else {
					self.updateStatus(InstanceStatus.ConnectionFailure)
				}
			},
		},
		get_localhost: {
			name: 'Test Localhost Connection',
			options: [
				{
					id: 'testLocalConnection',
					type: 'dropdown',
					label: 'Action type',
					choices: CONFCAPCOMMANDS,
					default: 'testLocalConnection',
				},
			],
			callback: async (event) => {
				console.log('get_localhost action triggered', event)
				const apiUrl = self.config.localhostUrl.replace('index.html', 'stream/LiteGetStream')
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
		},
		start_transcribing: {
			name: 'Start transcribing',
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
				console.log('get_localhost action triggered', event)
				const apiUrl = self.config.localhostUrl.replace('index.html', 'start')
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
		},
		stop_transcribing: {
			name: 'Stop transcribing',
			options: [
				{
					id: 'stopTranscribing',
					type: 'dropdown',
					label: 'Action type',
					choices: CONFCAPCOMMANDS,
					default: 'stopTranscribing',
				},
			],
			callback: async (event) => {
				console.log('get_localhost action triggered', event)
				const apiUrl = self.config.localhostUrl.replace('index.html', 'stop')
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
		},
	})
}
