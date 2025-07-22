import { type SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {
	streamName: string
	localhostUrl: string
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'static-text',
			id: 'info',
			label: 'Configuration Help',
			value: `<p>Start by setting creating an account stream on ConferenceCaptioning.com and activating your account in the ConferenceCaptioning app like this https://vimeo.com/1064921264</p>
					<p>Once you sign up to create an account using your custom stream, paste that in the Stream Name field below.</p>
					<p>Optionally, you can also directly communicate with the stream using the localhost URL that you get from the Info popup on the Stream page (shown in the video above)</p>`,
			width: 12,
		},
		{
			type: 'textinput',
			id: 'streamName',
			label: 'Stream name',
			width: 12,
		},
		{
			type: 'textinput',
			id: 'localhostUrl',
			label: 'Localhost URL in this format http://10.0.0.199:8080/index.html (optional)',
			width: 12,
		},
	]
}
