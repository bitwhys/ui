import { IconProps } from '@/icons/index.tsx'
import { cx } from '@/utils/cx'

export const Loading = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-slot="icon"
    className={cx(className)}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 18.5C12.5523 18.5 13 18.9477 13 19.5V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V19.5C11 18.9477 11.4477 18.5 12 18.5Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M12 1C12.5523 1 13 1.44772 13 2V4.5C13 5.05228 12.5523 5.5 12 5.5C11.4477 5.5 11 5.05228 11 4.5V2C11 1.44772 11.4477 1 12 1Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M15.2378 17.6252C15.7154 17.3479 16.3274 17.5103 16.6048 17.9879L17.8648 20.1579C18.1421 20.6355 17.9797 21.2475 17.5021 21.5248C17.0245 21.8021 16.4125 21.6397 16.1352 21.1621L14.8752 18.9921C14.5979 18.5145 14.7602 17.9025 15.2378 17.6252Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M6.49788 2.47522C6.97549 2.1979 7.58748 2.36026 7.8648 2.83787L9.1248 5.00787C9.40212 5.48548 9.23976 6.09748 8.76215 6.3748C8.28454 6.65212 7.67255 6.48975 7.39522 6.01214L6.13522 3.84214C5.8579 3.36453 6.02027 2.75254 6.49788 2.47522Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M17.6252 15.2379C17.9025 14.7603 18.5145 14.5979 18.9921 14.8752L21.1621 16.1352C21.6397 16.4125 21.8021 17.0245 21.5248 17.5021C21.2474 17.9797 20.6354 18.1421 20.1578 17.8648L17.9878 16.6048C17.5102 16.3275 17.3479 15.7155 17.6252 15.2379Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M2.47522 6.49788C2.75254 6.02027 3.36453 5.8579 3.84214 6.13522L6.01214 7.39522C6.48975 7.67255 6.65212 8.28454 6.3748 8.76215C6.09748 9.23976 5.48548 9.40212 5.00787 9.1248L2.83787 7.8648C2.36026 7.58748 2.1979 6.97549 2.47522 6.49788Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M18.5 12C18.5 11.4477 18.9477 11 19.5 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H19.5C18.9477 13 18.5 12.5523 18.5 12Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M1 12C1 11.4477 1.44772 11 2 11H4.5C5.05228 11 5.5 11.4477 5.5 12C5.5 12.5523 5.05228 13 4.5 13H2C1.44772 13 1 12.5523 1 12Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M21.5248 6.49788C21.8021 6.97549 21.6397 7.58748 21.1621 7.8648L18.9921 9.1248C18.5145 9.40212 17.9025 9.23976 17.6252 8.76215C17.3479 8.28454 17.5102 7.67255 17.9878 7.39522L20.1578 6.13522C20.6354 5.8579 21.2474 6.02027 21.5248 6.49788Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M6.3748 15.2379C6.65212 15.7155 6.48975 16.3275 6.01214 16.6048L3.84214 17.8648C3.36453 18.1421 2.75254 17.9797 2.47522 17.5021C2.1979 17.0245 2.36026 16.4125 2.83787 16.1352L5.00787 14.8752C5.48548 14.5979 6.09748 14.7603 6.3748 15.2379Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M17.5021 2.47522C17.9797 2.75254 18.1421 3.36453 17.8648 3.84214L16.6048 6.01214C16.3274 6.48975 15.7154 6.65212 15.2378 6.3748C14.7602 6.09748 14.5979 5.48548 14.8752 5.00787L16.1352 2.83787C16.4125 2.36026 17.0245 2.1979 17.5021 2.47522Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M8.76215 17.6252C9.23976 17.9025 9.40212 18.5145 9.1248 18.9921L7.8648 21.1621C7.58748 21.6397 6.97549 21.8021 6.49788 21.5248C6.02027 21.2475 5.8579 20.6355 6.13522 20.1579L7.39522 17.9879C7.67255 17.5103 8.28454 17.3479 8.76215 17.6252Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
  </svg>
)
