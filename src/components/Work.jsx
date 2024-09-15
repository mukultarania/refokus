import React from "react";

const Work = () => {
	const images = [
		{
			url: "https://images.unsplash.com/photo-1651499833146-0cd21fe5ca9b?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			top: "50%",
			left: "50%",
			isActive: false,
		},
		{
			url: "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			top: "50%",
			left: "48%",
			isActive: false,
		},
		{
			url: "https://plus.unsplash.com/premium_photo-1671689937079-036bd162d64f?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			top: "53%",
			left: "47%",
			isActive: false,
		},
		{
			url: "https://images.unsplash.com/photo-1570362685387-3cf5499c3fdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			top: "55%",
			left: "48%",
			isActive: false,
		},
		{
			url: "https://images.unsplash.com/photo-1651499833428-7981a27499f7?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			top: "54%",
			left: "49%",
			isActive: false,
		},
		{
			url: "https://images.unsplash.com/photo-1651499833155-af4dfe1984cd?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			top: "53%",
			left: "50%",
			isActive: false,
		},
	];
	return (
		<div className="w-full">
			<div className="max-w-5xl mx-auto text-center">
				<h1 className="text-[30vw] leading-none font-medium font-medium select-none text-white">
					work
				</h1>
			</div>
			<div className="absolute top-0 w-full h-full">
				{images.map(
					(image, i) =>
						image.isActive && (
							<img
								className="absolute w-40 h-40 rounded-lg -translate-x-[50%] -translate-y-[50%]"
								src={image.url}
								style={{ top: image.top, left: image.left }}
							/>
						)
				)}
			</div>
		</div>
	);
};

export default Work;
