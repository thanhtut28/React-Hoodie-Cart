import { banner } from '../../dummy';
import Content from './Content';

const HomeContent = () => {
    return (
        <>
            {banner.map((content, i) => (
                <Content key={content.id} content={content} nth={i} />
            ))}
        </>
    );
};

export default HomeContent;
