import React from 'react';
export const Banner00DataSource = {
  wrapper: { className: 'banner0 kasv2tnm4h-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper kasw16oszm-editor_css' },
  title: {
    className: 'banner0-title kasv452pwsi-editor_css',
    children: (
      <span>
        <span>
          <span>
            <p>코딩을 잘하지는 못하지만</p>
            <p>저는 계속 노력합니다.</p>
          </span>
        </span>
      </span>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>내가 만든 작은 포트폴리오</p>
      </span>
    ),
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content00DataSource = {
  wrapper: {
    className: 'home-page-wrapper content0-wrapper kasvdzyj8l-editor_css',
  },
  page: { className: 'home-page content0 kasvcwy8ty-editor_css' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>할수있는것들!</p>
          </span>
        ),
        className: 'kasvb4njo3l-editor_css',
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
            },
            {
              name: 'title',
              className: 'content0-block-title kasvhvvupz-editor_css',
              children: (
                <span>
                  <p>파이썬</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>그나마 자신있고 능숙하게 다루는 언어에요!</p>
                </span>
              ),
              className: 'kasvnhkf46m-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
            },
            {
              name: 'title',
              className: 'content0-block-title kasvi6owicc-editor_css',
              children: (
                <span>
                  <p>자바스크립트</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>포트폴리오 를 만들면서 조금 알게되었어요!</p>
                  </span>
                </span>
              ),
              className: 'kasvnegzr7-editor_css',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
            },
            {
              name: 'title',
              className: 'content0-block-title kasvid4yz2h-editor_css',
              children: (
                <span>
                  <p>리액트</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>자바스크립트처럼 포트폴리오 만들떄</p>
                  <p>털끝정도(?) 건드렸어요!</p>
                </span>
              ),
              className: 'kasvnb1oglp-editor_css',
            },
          ],
        },
      },
    ],
  },
};
