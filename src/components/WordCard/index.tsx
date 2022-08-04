import React from 'react';
import { Word } from '../../types';

interface WordCardProps {
  word: Word | undefined;
}

function WordCard({ word }: WordCardProps) {
  return word ? <h1>{word.word}</h1> : <p>word was not defined</p>;
}

export default WordCard;
