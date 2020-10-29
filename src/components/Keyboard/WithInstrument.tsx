import React, { FunctionComponent, useEffect } from "react";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { Keyboard } from "../Keyboard/Keyboard";
import { useInstrument } from "../../state/Instrument/InstrumentContext";
import "./style.css";

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  const { loading, play, stop, load, current } = useSoundfont({ AudioContext });
  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [load, loading, current, instrument]);
  return <Keyboard loading={loading} play={play} stop={stop} />;
};
