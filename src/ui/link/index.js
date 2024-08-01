import { Link } from './styles';

const SafeExternalLink = ({
    href,
    children,
    className
}) => (
    <Link
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={className}
    >
        {children}
    </Link>
);

export default SafeExternalLink;