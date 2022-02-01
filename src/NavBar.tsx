import styled from 'styled-components/macro'

const SNav = styled.nav`
	background-color: #000;
`

function NavBar() {
	return (
		<header>
			<SNav>
				<h1>NavBar</h1>
			</SNav>
		</header>
	)
}

export default NavBar
