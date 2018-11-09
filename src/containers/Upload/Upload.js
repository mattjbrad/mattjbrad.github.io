import React from 'react'
import classes from './Upload.css';

export default () => {
  return (
    <div className={classes.Upload}>
      {/* Sorry, we are not currently accepting any uploads of your lovely dogs. */}
      <p>Upload a pic of your dog below.</p>
      <form className="uploadForm">
        <input type="file" name="image" id="image" accept="image/jpeg, image/png" className={classes.fileInput}></input>
        <label class={classes.fileLabel}for="image"><i class="fas fa-upload"></i> Choose a dog</label>
        <button class={classes.uploadButton} type="submit">Upload</button>
      </form>
    </div>

  )
}
