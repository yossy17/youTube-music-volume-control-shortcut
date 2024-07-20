// ==UserScript==
// @name                YouTube Music volume control shortcut
// @name:ja             YouTube Music volume control shortcut
// @name:en             YouTube Music volume control shortcut
// @name:zh-CN          YouTube Music volume control shortcut
// @name:ko             YouTube Music volume control shortcut
// @name:ru             YouTube Music volume control shortcut
// @name:de             YouTube Music volume control shortcut
// @description         YouTube Musicで音量を変更するキーボードショートカットを追加
// @description:ja      YouTube Musicで音量を変更するキーボードショートカットを追加
// @description:en      Add keyboard shortcuts to change the volume of YouTube Music
// @description:zh-CN   添加键盘快捷键来改变YouTube Music的音量
// @description:ko      YouTube Music의 볼륨을 변경하는 키보드 단축키 추가
// @description:ru      Добавьте сочетания клавиш для изменения громкости YouTube Music
// @description:de      Fügen Sie Tastaturkürzel hinzu, um die Lautstärke von YouTube Music zu ändern
// @version             1.0.5
// @author              Yos_sy17
// @match               https://music.youtube.com/*
// @namespace           http://tampermonkey.net/
// @icon                data:image/png;base64,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
// @license             MIT
// @run-at              document-start
// @grant               none
// @downloadURL         https://update.greasyfork.org/scripts/500655/youtube-music-volume-control-shortcut.user.js
// @updateURL           https://update.greasyfork.org/scripts/500655/youtube-music-volume-control-shortcut.meta.js
// ==/UserScript==

(function () {
  "use strict";

  // 翻訳オブジェクト
  const TRANSLATIONS = {
    en: { volumeChanged: "Volume" },
    ja: { volumeChanged: "音量" },
    zh: { volumeChanged: "音量" },
    ko: { volumeChanged: "볼륨" },
    ru: { volumeChanged: "Громкость" },
    de: { volumeChanged: "Lautstärke" },
  };

  const lang =
    (navigator.language || navigator.userLanguage).split("-")[0] || "en";

  // 音量変更のキーボードショートカット
  function setupKeyboardShortcuts() {
    document.addEventListener("keydown", handleVolumeChange);
  }

  // キーボードイベントを処理
  function handleVolumeChange(event) {
    const volumeSlider = document.querySelector(
      'tp-yt-paper-slider[id="volume-slider"]'
    );
    if (!volumeSlider) return;

    const isVolumeUp = event.key === "ArrowUp";
    const isVolumeDown = event.key === "ArrowDown";

    if (!(isVolumeUp || isVolumeDown)) return;

    event.preventDefault();

    const currentVolume = volumeSlider.value;
    let newVolume = calculateNewVolume(currentVolume, isVolumeUp, event);

    if (newVolume !== null) {
      updateVolume(volumeSlider, newVolume);
    }
  }

  // キーボードショートカットの設定
  function calculateNewVolume(currentVolume, isVolumeUp, event) {
    if (event.altKey && !event.ctrlKey && !event.shiftKey) {
      // Alt + ↑/↓: 音量を1%上げる/下げる
      return isVolumeUp
        ? Math.min(100, currentVolume + 1)
        : Math.max(0, currentVolume - 1);
    } else if (event.ctrlKey && event.altKey && !event.shiftKey) {
      // Ctrl + Alt + ↑/↓: 音量を5%上げる/下げる
      return isVolumeUp
        ? Math.min(100, currentVolume + 5)
        : Math.max(0, currentVolume - 5);
    } else if (event.ctrlKey && event.shiftKey && event.altKey) {
      // Ctrl + Shift + Alt + ↑/↓: 0% / 50% / 100% 変更
      return isVolumeUp
        ? currentVolume < 50
          ? 50
          : 100
        : currentVolume > 50
          ? 50
          : 0;
    }
    return null;
  }

  // 音量を更新し、通知を表示
  function updateVolume(volumeSlider, newVolume) {
    volumeSlider.value = newVolume;
    volumeSlider.dispatchEvent(new Event("change"));
    updateVolumeNotification(newVolume);
  }

  // 音量変更通知を更新
  function updateVolumeNotification(volume) {
    let notification = document.getElementById("ytmusic-volume-notification");

    if (!notification) {
      notification = createNotificationElement();
    }

    notification.textContent = `${TRANSLATIONS[lang].volumeChanged}: ${volume}%`;
    notification.style.display = "block";

    // 既存のタイムアウトをクリアし、新しいタイムアウトを設定
    clearTimeout(notification.hideTimeout);
    notification.hideTimeout = setTimeout(() => {
      notification.style.display = "none";
    }, 2000);
  }

  // 通知を作成
  function createNotificationElement() {
    const notification = document.createElement("div");
    notification.id = "ytmusic-volume-notification";
    notification.style.cssText = `
            position: fixed; bottom: 20px; right: 20px; background-color: rgba(0, 0, 0, 0.7);
            color: white; padding: 10px; border-radius: 5px; z-index: 9999; display: none;
        `;
    document.body.appendChild(notification);
    return notification;
  }

  setupKeyboardShortcuts();
})();
