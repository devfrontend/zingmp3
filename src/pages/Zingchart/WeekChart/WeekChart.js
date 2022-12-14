import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './WeekChart.module.scss';
import WeekChartItem from './WeekChartItem';

const cx = classNames.bind(styles);

function WeekChart({ data, onClick }) {
    const themeCurrent = useSelector((state) => state.audio.themeCurrent);

    const areas = [
        {
            country: 'Việt Nam',
            code: 'vn',
        },
        {
            country: 'US-UK',
            code: 'us',
        },
        {
            country: 'K-Pop',
            code: 'korea',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            {!themeCurrent && (
                <>
                    <div className={cx('bg-blur')}></div>
                    <div className={cx('bg-alpha')}></div>
                </>
            )}
            <h1 className={cx('title')}>Bảng Xếp Hạng Tuần</h1>
            <div className={cx('area')}>
                {areas.map((area, index) => (
                    <WeekChartItem
                        key={index}
                        indexItem={index}
                        data={data[area.code]}
                        name={area.country}
                        onClick={onClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default WeekChart;
