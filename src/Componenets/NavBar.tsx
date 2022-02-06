import { useState } from 'react'
import styled from 'styled-components/macro'

const SHeader = styled.header`
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	padding: 2rem;
`

const SButton = styled.div`
	height: 2.5em;
	width: 3em;
	position: relative;
	display: flex;
	align-items: center;

	&::before,
	::after {
		content: '';
		background-color: var(--cyan);
		position: absolute;
		height: 2px;
		width: inherit;
	}

	&::before {
		top: 15%;
	}

	&::after {
		bottom: 15%;
	}

	> div {
		height: 2px;
		width: inherit;
		background-color: var(--cyan);
	}
`

const SNav = styled.nav<{ isOpen: boolean }>`
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
`

const SLi = styled.li`
	list-style: none;
	font-size: 3em;
`

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<SHeader>
			<SButton onClick={() => setIsOpen(!isOpen)}>
				<div />
			</SButton>
			<SNav isOpen={isOpen}>
				<ul>
					<SLi>Home</SLi>
					<SLi>About Me</SLi>
					<SLi>Work</SLi>
					<SLi>Contact</SLi>
				</ul>
			</SNav>
		</SHeader>
	)
}
