import 'package:flutter/material.dart';
import './text_output.dart';

class TextControl extends StatefulWidget {
  const TextControl({Key? key}) : super(key: key);

  @override
  State<TextControl> createState() => _TextControlState();
}

class _TextControlState extends State<TextControl> {
  String _mainText = 'This is my first assignment';
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ElevatedButton(
            onPressed: () {
              setState(() {
                _mainText = 'This Changed';
              });
            },
            child: Text('Change Text')),
        TextOutput(_mainText),
      ],
    );
  }
}
