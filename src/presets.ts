import type { ModuleInstance } from './main.js'
import type { CompanionPresetDefinition, CompanionPresetDefinitions } from '@companion-module/base'
import { combineRgb } from '@companion-module/base'
import { CONFCAPCOMMANDS, LANGUAGES } from './constants.js'

export function UpdatePresets(self: ModuleInstance): void {
	const presets: CompanionPresetDefinitions = {}

	for (const command of CONFCAPCOMMANDS) {
		const preset: CompanionPresetDefinition = {
			type: 'button',
			category: 'ConferenceCaptioning',
			name: command.buttonText,
			style: {
				size: 14,
				bgcolor: combineRgb(0, 0, 0),
				color: combineRgb(255, 255, 255),
				text: command.buttonText,
			},
			steps: [
				{
					down: [
						{
							actionId: 'get_caption',
							options: {
								command: command.id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
		presets[command.id] = preset
	}

	for (const language of LANGUAGES) {
		const preset: CompanionPresetDefinition = {
			type: 'button',
			category: 'Languages',
			name: language.label,
			style: {
				size: 12,
				bgcolor: combineRgb(0, 0, 0),
				color: combineRgb(255, 255, 255),
				text: language.label,
			},
			steps: [
				{
					down: [
						{
							actionId: 'language_select',
							options: {
								language: language.id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets[language.id] = preset
	}

	self.setPresetDefinitions(presets)
}
