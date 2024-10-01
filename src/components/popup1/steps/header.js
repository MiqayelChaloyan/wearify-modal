import { H2, HorizontalLine } from '../styles';

export default function Header({ title }) {
    return (
        <section>
            <H2>{title}</H2>
            <HorizontalLine />
        </section>
    );
};
