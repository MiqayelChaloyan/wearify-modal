import { H2, HorizontalLine } from './styles';

export default function Header({ title, className }) {
    return (
        <section className={className}>
            <H2>{title}</H2>
            <HorizontalLine />
        </section>
    );
};
