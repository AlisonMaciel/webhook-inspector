import { CopyIcon } from 'lucide-react';
import { IconButton } from './icon-button';
import { WebhooksList } from '../webhooksList';

export function Sidebar() {
	return (
		<div className="flex h-screen flex-col">
			<div className="flex items-center justify-between border-b border-zinc-700 px-4 py-5">
				<div className="flex items-baseline">
					<span className="font-semibold text-zinc-100">webhook</span>
					<span className="font-normal text-zinc-400">.inspec</span>
				</div>
			</div>

			<div className="flex items-center gap-2 border-zinc-700 bg-zinc-800 px-4 py-2.5">
				<div className="flex-1 min-w-0 flex items-center justify-between gap-1 text-xs font-mono text-zinc-300">
					<span className="truncate">http://localhost:3333/home</span>
					<IconButton icon={<CopyIcon className="size-4" />} />
				</div>
			</div>
			<WebhooksList />
		</div>
	);
}
