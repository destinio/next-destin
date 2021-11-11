import styled from '@emotion/styled'

interface Props {
  size?: string
  rotate?: boolean
  color?: string
}

export function Logo({ size = '8rem', rotate = false, color = '#00a7ff' }: Props) {
  const StyledLogo = styled.div`
    width: ${size};
    animation: spin 20s linear infinite;

    svg {
      width: 100%;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  `

  return (
    <StyledLogo>
      <svg
        viewBox="0 0 198 191"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 2,
        }}
      >
        <path
          d="M772 381.733v190.534C730.464 560.5 700 522.28 700 477c0-45.28 30.464-83.5 72-95.267Zm82.571 13.344C880.777 412.899 898 442.954 898 477c0 34.03-17.207 64.072-43.381 81.89a48.597 48.597 0 0 0 3.05-4.336c3.246-5.178 5.815-11.747 7.709-19.707 1.893-7.961 2.84-17.66 2.84-29.098v-57.498c0-11.438-.947-21.118-2.84-29.04-1.894-7.921-4.463-14.49-7.709-19.707a48.496 48.496 0 0 0-3.098-4.427Zm-44.895 159.941c5.409 0 9.873-.696 13.389-2.087 3.516-1.391 6.299-3.845 8.347-7.361 2.048-3.517 3.458-8.308 4.231-14.375.773-6.067 1.159-13.737 1.159-23.011v-61.44c0-9.274-.386-16.945-1.159-23.012-.773-6.066-2.183-10.858-4.231-14.374-2.048-3.517-4.831-5.97-8.347-7.362-3.516-1.391-7.98-2.086-13.389-2.086h-7.651v155.108h7.651Z"
          style={{ fill: color }}
          transform="translate(-700 -381.733)"
        />
      </svg>
    </StyledLogo>
  )
}
