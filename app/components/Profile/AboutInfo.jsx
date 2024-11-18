const AboutInfo = ({ data }) => {
  const isDataEmpty =
    !data.birthday &&
    !data.horoscope &&
    !data.zodiac &&
    !data.height &&
    !data.weight;

  return (
    <div className="font-medium text-sm text-white text-opacity-50 space-y-2">
      {isDataEmpty ? (
        <div className="desc font-medium text-sm text-white text-opacity-50">
          Please add your information to help others know you better.
        </div>
      ) : (
        <>
          {data.birthday && (
            <p>
              Birthday: <span className="text-white">{data.birthday}</span>
            </p>
          )}

          {data.horoscope && (
            <p>
              Horoscope: <span className="text-white">{data.horoscope}</span>
            </p>
          )}

          {data.zodiac && (
            <p>
              Zodiac: <span className="text-white">{data.zodiac}</span>
            </p>
          )}

          {data.height && (
            <p>
              Height: <span className="text-white">{`${data.height} cm`}</span>
            </p>
          )}

          {data.weight && (
            <p>
              Weight: <span className="text-white">{`${data.weight} kg`}</span>
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default AboutInfo;
