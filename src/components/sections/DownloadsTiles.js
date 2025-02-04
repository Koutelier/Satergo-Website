import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

import { ReactComponent as WindowsLogo } from '../../assets/images/windows.svg';
import { ReactComponent as LinuxLogo } from '../../assets/images/linux.svg';
import { ReactComponent as AppleLogo } from '../../assets/images/apple.svg';

const propTypes = {
	...SectionTilesProps.types
}

const defaultProps = {
	...SectionTilesProps.defaults
}
const DownloadsTiles = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {

	const outerClasses = classNames(
		'downloads-tiles section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'downloads-tiles-inner section-inner pt-0',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames(
		'tiles-wrap center-content',
		pushLeft && 'push-left'
	);

	const sectionHeader = {
		title: 'Downloads',
		paragraph: 'Version: 0.0.3, released: 22 June, 2022. Portable runtimes (extract everything and execute the run file)'
	};

	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>

						<div className="tiles-item reveal-from-bottom" data-reveal-offset="0">
							<div className="tiles-item-inner">
								<div className="downloads-tiles-item-header mb-16">
									<div>
										<WindowsLogo
											alt="Windows logo"
											width={64}
											height={64} />
									</div>
								</div>
								<div className="downloads-tiles-item-content">
									<h4 className="mt-0 mb-8">Windows 64-bit (x64)</h4>
									<p className="m-0 text-sm">
										<a className="button button-sm" href="https://github.com/Satergo/Satergo/releases/download/v0.0.3/Satergo-v0.0.3-windows-x64.zip">Download</a>
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom" data-reveal-delay="200" data-reveal-offset="0">
							<div className="tiles-item-inner">
								<div className="downloads-tiles-item-header">
									<div className="downloads-tiles-item-image mb-16">
										<LinuxLogo
											alt="Linux logo"
											width={64}
											height={64} />
									</div>
								</div>
								<div className="downloads-tiles-item-content">
									<h4 className="mt-0 mb-8">Linux 64-bit (x64)</h4>
									<p className="m-0 text-sm">
										<a className="button button-sm" href="https://github.com/Satergo/Satergo/releases/download/v0.0.3/Satergo-v0.0.3-linux-x64.zip">Download</a>
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom" data-reveal-delay="400" data-reveal-offset="0">
							<div className="tiles-item-inner">
								<div className="downloads-tiles-item-header">
									<div className="downloads-tiles-item-image mb-16">
										<LinuxLogo
											alt="Linux logo"
											width={64}
											height={64} />
									</div>
								</div>
								<div className="downloads-tiles-item-content">
									<h4 className="mt-0 mb-8">Linux 64-bit (aarch64)</h4>
									<p className="m-0 text-sm">
										<a className="button button-sm" href="https://github.com/Satergo/Satergo/releases/download/v0.0.3/Satergo-v0.0.3-linux-aarch64.zip">Download</a>
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom" data-reveal-offset="0">
							<div className="tiles-item-inner">
								<div className="downloads-tiles-item-header mb-16">
									<div>
										<AppleLogo
											alt="Apple logo"
											width={64}
											height={64} />
									</div>
								</div>
								<div className="apple">
									<h4 className="mt-0 mb-8">
									macOS 64-bit (intel & aarch64)
										</h4>
									<p className="m-0 text-sm">
										<a className="button button-sm" href="https://github.com/Satergo/Satergo/releases/download/v0.0.3/Satergo-v0.0.3-mac-x64.zip">Download</a>
									</p>
								</div>
							</div>
						</div>

				 

					</div>
				</div>
			</div>
		</section>
	);
}

DownloadsTiles.propTypes = propTypes;
DownloadsTiles.defaultProps = defaultProps;

export default DownloadsTiles;