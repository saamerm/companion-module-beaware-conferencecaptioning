import type { DropdownChoice } from '@companion-module/base'

export interface DropdownChoiceWithButtonText extends DropdownChoice {
	buttonText: string
}
export const CONFCAPCOMMANDS: DropdownChoiceWithButtonText[] = [
	{ id: 'testRemoteConnection', label: 'Test Remote Connection', buttonText: 'Test Remote Connection' },
	{ id: 'testLocalConnection', label: 'Test Local Connection', buttonText: 'Test Local Connection' },
	{ id: 'startTranscribing', label: 'Start transcribing', buttonText: 'Start transcribing' },
	{ id: 'stopTranscribing', label: 'Stop transcribing', buttonText: 'Stop transcribing' },
	{ id: 'showCaptions', label: 'Show captions', buttonText: 'Show captions' },
	{ id: 'hideCaptions', label: 'Hide captions', buttonText: 'Hide captions' },
] as const

export const LANGUAGES: DropdownChoice[] = [
	{ id: 'en', label: 'English' },
	{ id: 'bg', label: 'Bulgarian' },
	{ id: 'cs', label: 'Czech' },
	{ id: 'da', label: 'Danish' },
	{ id: 'nl', label: 'Dutch' },
	{ id: 'fr', label: 'French' },
	{ id: 'de', label: 'German' },
	{ id: 'el', label: 'Greek' },
	{ id: 'hi', label: 'Hindi' },
	{ id: 'hu', label: 'Hungarian' },
	{ id: 'id', label: 'Indonesian' },
	{ id: 'it', label: 'Italian' },
	{ id: 'ko', label: 'Korean' },
	{ id: 'ja', label: 'Japanese' },
	{ id: 'lt', label: 'Lithuanian' },
	{ id: 'ms', label: 'Malay' },
	{ id: 'no', label: 'Norwegian' },
	{ id: 'pl', label: 'Polish' },
	{ id: 'pt', label: 'Portuguese' },
	{ id: 'ro', label: 'Romanian' },
	{ id: 'ru', label: 'Russian' },
	{ id: 'es', label: 'Spanish' },
	{ id: 'sv', label: 'Swedish' },
	{ id: 'th', label: 'Thai' },
	{ id: 'tr', label: 'Turkish' },
	{ id: 'uk', label: 'Ukrainian' },
	{ id: 'vi', label: 'Vietnamese' },
	{ id: 'zh', label: 'Chinese (Mandarin, Simplified)' },
	{ id: 'multi', label: 'Pick up the language spoken automatically' },
] as const
