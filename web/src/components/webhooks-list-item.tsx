import { Link } from '@tanstack/react-router';
import { Checkbox } from './ui/checkbox';
import { Trash2 } from 'lucide-react';
import { IconButton } from './ui/icon-button';

export function WebhooksListItem() {
	return (
		<>
			<div className="group rounded-lg transition-colors duration-150 hover:bg-zinc-700/30">
				<div className="flex items-start gap-3 px-4 py-2.5">
					<Checkbox />
					<Link to="/" className="flex flex-1 min-w-0 items-start gap-3">
						<span className="w-12 shrink-0 font-mono font-semibold text-zinc-300 text-right">
							POST
						</span>
						<div className="flex-1 min-w-0">
							<p className="truncate text-xs text-zinc-200 font-mono">
								/video/status
							</p>
							<p className="text-xs text-zinc-500 font-medium mt-1">1 minuts</p>
						</div>
					</Link>
					<IconButton
						icon={<Trash2 className="size-3.5 text-zinc-400 cursor-pointer" />}
						className="opacity-0 transition-opacity group-hover:opacity-100"
					/>
				</div>
			</div>
			<div className="group rounded-lg transition-colors duration-150 hover:bg-zinc-700/30">
				<div className="flex items-start gap-3 px-4 py-2.5">
					<Checkbox />
					<Link to="/" className="flex flex-1 min-w-0 items-start gap-3">
						<span className="w-12 shrink-0 font-mono font-semibold text-zinc-300 text-right">
							POST
						</span>
						<div className="flex-1 min-w-0">
							<p className="truncate text-xs text-zinc-200 font-mono">
								/video/status
							</p>
							<p className="text-xs text-zinc-500 font-medium mt-1">1 minuts</p>
						</div>
					</Link>
					<IconButton
						icon={<Trash2 className="size-3.5 text-zinc-400 cursor-pointer" />}
						className="opacity-0 transition-opacity group-hover:opacity-100"
					/>
				</div>
			</div>{' '}
			<div className="group rounded-lg transition-colors duration-150 hover:bg-zinc-700/30">
				<div className="flex items-start gap-3 px-4 py-2.5">
					<Checkbox />
					<Link to="/" className="flex flex-1 min-w-0 items-start gap-3">
						<span className="w-12 shrink-0 font-mono font-semibold text-zinc-300 text-right">
							POST
						</span>
						<div className="flex-1 min-w-0">
							<p className="truncate text-xs text-zinc-200 font-mono">
								/video/status
							</p>
							<p className="text-xs text-zinc-500 font-medium mt-1">1 minuts</p>
						</div>
					</Link>
					<IconButton
						icon={<Trash2 className="size-3.5 text-zinc-400 cursor-pointer" />}
						className="opacity-0 transition-opacity group-hover:opacity-100"
					/>
				</div>
			</div>{' '}
			<div className="group rounded-lg transition-colors duration-150 hover:bg-zinc-700/30">
				<div className="flex items-start gap-3 px-4 py-2.5">
					<Checkbox />
					<Link to="/" className="flex flex-1 min-w-0 items-start gap-3">
						<span className="w-12 shrink-0 font-mono font-semibold text-zinc-300 text-right">
							POST
						</span>
						<div className="flex-1 min-w-0">
							<p className="truncate text-xs text-zinc-200 font-mono">
								/video/status
							</p>
							<p className="text-xs text-zinc-500 font-medium mt-1">1 minuts</p>
						</div>
					</Link>
					<IconButton
						icon={<Trash2 className="size-3.5 text-zinc-400 cursor-pointer" />}
						className="opacity-0 transition-opacity group-hover:opacity-100"
					/>
				</div>
			</div>{' '}
			<div className="group rounded-lg transition-colors duration-150 hover:bg-zinc-700/30">
				<div className="flex items-start gap-3 px-4 py-2.5">
					<Checkbox />
					<Link to="/" className="flex flex-1 min-w-0 items-start gap-3">
						<span className="w-12 shrink-0 font-mono font-semibold text-zinc-300 text-right">
							POST
						</span>
						<div className="flex-1 min-w-0">
							<p className="truncate text-xs text-zinc-200 font-mono">
								/video/status
							</p>
							<p className="text-xs text-zinc-500 font-medium mt-1">1 minuts</p>
						</div>
					</Link>
					<IconButton
						icon={<Trash2 className="size-3.5 text-zinc-400 cursor-pointer" />}
						className="opacity-0 transition-opacity group-hover:opacity-100"
					/>
				</div>
			</div>{' '}
			<div className="group rounded-lg transition-colors duration-150 hover:bg-zinc-700/30">
				<div className="flex items-start gap-3 px-4 py-2.5">
					<Checkbox />
					<Link to="/" className="flex flex-1 min-w-0 items-start gap-3">
						<span className="w-12 shrink-0 font-mono font-semibold text-zinc-300 text-right">
							POST
						</span>
						<div className="flex-1 min-w-0">
							<p className="truncate text-xs text-zinc-200 font-mono">
								/video/status
							</p>
							<p className="text-xs text-zinc-500 font-medium mt-1">1 minuts</p>
						</div>
					</Link>
					<IconButton
						icon={<Trash2 className="size-3.5 text-zinc-400 cursor-pointer" />}
						className="opacity-0 transition-opacity group-hover:opacity-100"
					/>
				</div>
			</div>
		</>
	);
}
